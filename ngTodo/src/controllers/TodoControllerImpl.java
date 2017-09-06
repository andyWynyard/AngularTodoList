package controllers;

import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import data.TodoDAO;
import entities.Todo;

@RestController
public class TodoControllerImpl implements TodoControllerI {
	
	@Autowired
	private TodoDAO dao;

	@RequestMapping(path="ping", method=RequestMethod.GET)
	public String ping() {
		return "pong";
	}
	
	@Override
	@RequestMapping(path="user/{uid}/todo", method=RequestMethod.GET)
	public Set<Todo> index(HttpServletRequest req, HttpServletResponse res, @PathVariable int uid) {		
			return dao.index(uid);
	}

	@Override
	public Todo show(HttpServletRequest req, HttpServletResponse res, int uid, int tid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@RequestMapping(path="user/{uid}/todo", method=RequestMethod.POST)
	public Todo create(HttpServletRequest req, HttpServletResponse res, @PathVariable int uid, @RequestBody String todoJson) {
		return dao.create(uid, todoJson);
	}

	@Override
	@RequestMapping(path="user/{uid}/todo/{tid}", method=RequestMethod.PUT)
	public Todo update(HttpServletRequest req, HttpServletResponse res, @PathVariable int uid, @PathVariable int tid, @RequestBody String todoJson) {
		// TODO Auto-generated method stub
		return dao.update(uid, tid, todoJson);
	}

	@Override
	@RequestMapping(path="/user/{uid}/todo/{tid}", method=RequestMethod.DELETE)
	public Boolean destroy(HttpServletRequest req, HttpServletResponse res, @PathVariable int uid, @PathVariable int tid) {	
			return dao.destroy(uid, tid);
	
	}

}
