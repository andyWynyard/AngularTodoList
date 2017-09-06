package data;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.User;

@Transactional
@Repository
public class AuthDAOImpl implements AuthDAO {

	@PersistenceContext
	private EntityManager em;

	@Autowired
	private PasswordEncoder encoder;

	@Override
	public User register(User user) {
		String passwordSHA = encoder.encode(user.getPassword());
		user.setPassword(passwordSHA);
		em.persist(user);
		em.flush();
		return user;
	}

	@Override
	public User login(User user) throws NoResultException {
		User managedUser;

		try {
			String query = "SELECT u FROM User u WHERE u.email = :email";
			managedUser = em.createQuery(query, User.class).setParameter("email", user.getEmail()).getResultList()
					.get(0);
			if (encoder.matches(user.getPassword(), managedUser.getPassword())) {
				return managedUser;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return null;
	}
}
