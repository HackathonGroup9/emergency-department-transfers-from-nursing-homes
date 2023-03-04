package group9.emergencyroomtransfer.model.physician;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PhysicianRepository extends JpaRepository<Physician, Integer> {

    Optional<Physician> findFirstById(int id);

}
