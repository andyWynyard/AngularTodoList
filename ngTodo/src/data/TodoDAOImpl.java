package data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Todo;
import entities.User;

@Transactional
@Repository
public class TodoDAOImpl implements TodoDAO {
	
	@PersistenceContext
	private EntityManager em;

	@Override
	public Set<Todo> index(int uid) {
		String query = "SELECT t FROM Todo t WHERE t.user.id = :uid";
		 List<Todo> listTodo = em.createQuery(query, Todo.class).setParameter("uid", uid).getResultList();
		 Set<Todo> setTodo = new HashSet(listTodo);
		 return setTodo;
	}

	@Override
	public Todo show(int uid, int tid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Todo create(int uid, String todoJson) {
		ObjectMapper om = new ObjectMapper();
		Todo newTodo = null;
		try {
			
			newTodo = om.readValue(todoJson, Todo.class);
			newTodo.setUser(em.find(User.class, uid));
			em.persist(newTodo);
			em.flush();
			return newTodo;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		
		
		
	}

	@Override
	public Todo update(int uid, int tid, String todoJson) {
		Todo t = em.find(Todo.class, tid);
		Todo tNew = null;
		ObjectMapper om = new ObjectMapper();
		try {
			tNew = om.readValue(todoJson, Todo.class);
			t.setTask(tNew.getTask());
			t.setDescription(tNew.getDescription());
			t.setCompleted(tNew.isCompleted());
			t.setCompleteDate(tNew.getCompleteDate());
			return t;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public Boolean destroy(int uid, int tid) {
		boolean removed;
		try {
			Todo j = em.find(Todo.class, tid);
			em.remove(j);
			removed = true;
		} catch (Exception e) {
			e.printStackTrace();
			removed = false;
		}
		return removed;
	}

}
