package security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import entities.User;

public class DataSecurityInterceptor implements HandlerInterceptor {
	
	@Override
	public boolean preHandle(HttpServletRequest req, HttpServletResponse resp, Object handler) throws Exception {
		Object userObject = req.getSession().getAttribute("user");
		User user = null;
		if (userObject != null) {
			user = (User) userObject;
			return true;
		} else {
			resp.setStatus(401);
//			resp.sendRedirect("/unauthorized"); //Dont need
			return false;
		}
//		
//		String userIDStr = req.getRequestURI().split("/")[3]; 
//		if (Integer.parseInt(userIDStr) == user.getId()) {
//			
//		}
		
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		// TODO Auto-generated method stub
		
	}

}