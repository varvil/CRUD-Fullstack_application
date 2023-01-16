package fi.vamk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fi.vamk.Crud.model.User;
import fi.vamk.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
@RestController
public class UserController {
	
	
	@Autowired
	private UserRepository userRepository;
	
	
	//Get all the users from endpoint /users
	@GetMapping("/users")
	public List <User> getAllUsers() {
		return userRepository.findAll();
	}
	
	//Use post method to insert new users to database. Same endpoint
	@PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }
	
	
	//Get mapping for only 1 user with id
	@GetMapping("/users/{id}")
	public User getUserById(@PathVariable(value = "id") Long userId) {
		return userRepository.findById(userId)
				.orElseThrow();
	}
	
	//CRUD method to update user object
	@PutMapping("/users/{id}")
	public User updateUser(@PathVariable(value = "id") long userId, @RequestBody User userDetails) {
		
		User user = userRepository.findById(userId)
				.orElseThrow();
		
		user.setName(userDetails.getName());
		user.setEmail(userDetails.getEmail());
		user.setPhone(userDetails.getPhone());
		user.setProfile(userDetails.getProfile());
		
		User updatedUser = userRepository.save(user);
		return updatedUser;
	}
	
	//CRUD Method to delete from id
	@DeleteMapping("/users/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable(value = "id") Long userId) {
		User user = userRepository.findById(userId)
			.orElseThrow();
	
		userRepository.delete(user);
		return ResponseEntity.ok().build();
	}
}

