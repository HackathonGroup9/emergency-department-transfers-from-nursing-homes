package group9.emergencyroomtransfer.model.severity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Getter
@Setter
@Table(name = "symptom_severity")
public class Severity implements Serializable {
    @Id
    @Column(name = "severity_id")
    private Integer severityId;
    @Column(name = "severity_name")
    private String severityName;
    @Column(name = "symptom_id")
    private Integer symptomId;
    @Column (name = "notification_id")
    private Integer notificationId;

}
