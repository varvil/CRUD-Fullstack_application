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

import fi.vamk.Crud.model.Profile;
import fi.vamk.repository.ProfileRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
@RestController
public class ProfileController {

	@Autowired
	private ProfileRepository profileRepository;
	
	
	//Get all the users from endpoint /users
	@GetMapping("/profiles")
	public List <Profile> getAllUsers() {
		return profileRepository.findAll();
	}
	
	//Use post method to insert new users to database. Same endpoint
	@PostMapping("/profiles")
	public Profile createProfile(@RequestBody Profile profile) {
	    return profileRepository.save(profile);
	}
	
	//Get mapping for only 1 user with id
	@GetMapping("/profiles/{id}")
	public Profile getProfileById(@PathVariable(value = "id") Long ProfileId) {
		return profileRepository.findById(ProfileId)
				.orElseThrow();
	}
	
	//CRUD method to update user object
	@PutMapping("/profiles/{id}")
	public Profile updateProfile(@PathVariable(value = "id") long profileId, @RequestBody Profile profileDetails) {
			
		Profile profile = profileRepository.findById(profileId)
				.orElseThrow();
			
		profile.setProfileName(profileDetails.getProfileName());

			
		Profile updatedProfile = profileRepository.save(profile);
		return updatedProfile;
	}
	
	//CRUD Method to delete from id
	@DeleteMapping("/profiles/{id}")
	public ResponseEntity<?> deleteProfile(@PathVariable(value = "id") Long profileId) {
		Profile profile = profileRepository.findById(profileId)
			.orElseThrow();
		
		profileRepository.delete(profile);
		return ResponseEntity.ok().build();
	}
}
