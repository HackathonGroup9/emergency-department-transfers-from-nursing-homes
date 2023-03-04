package group9.emergencyroomtransfer.model.severity;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SeverityRepository extends JpaRepository<Severity, Integer> {
    List<Severity> findAllBySymptomId(int systemId);
    Severity findFirstBySeverityId(int severityId);
}
