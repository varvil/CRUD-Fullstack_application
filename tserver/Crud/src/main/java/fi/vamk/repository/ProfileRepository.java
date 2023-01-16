package fi.vamk.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fi.vamk.Crud.model.Profile;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long> {
	

}
