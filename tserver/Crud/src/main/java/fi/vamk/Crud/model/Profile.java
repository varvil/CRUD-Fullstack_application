package fi.vamk.Crud.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="PROFILE")

public class Profile {

	@Id
	@Column(name="PROFILE_ID")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int profileId;
	
	@Column(name="PROFILE_NAME")
	private String profileName;
	
	public int getProfileId() {
		return profileId;
	}
	
	public String getProfileName() {
		return profileName;
	}
	
	public void setProfileName(String profileName) {
		this.profileName = profileName;
	}
	
	public void setProfileId(int profileId) {
		this.profileId = profileId;
	}
}
