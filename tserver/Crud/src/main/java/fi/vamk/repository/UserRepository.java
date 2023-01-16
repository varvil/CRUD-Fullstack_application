package fi.vamk.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fi.vamk.Crud.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	

}
