package group9.emergencyroomtransfer.model.system;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SystemRepository extends JpaRepository<System, Long> {
}
