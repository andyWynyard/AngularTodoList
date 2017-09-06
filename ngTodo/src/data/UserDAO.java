package data;

import java.util.Set;

import entities.User;

public interface UserDAO {

	Set<User> index();

	User show(int userId);

	User create(String jsonUser);

	User update(int id, String jsonUser);

	boolean destroy(int userId);

}
