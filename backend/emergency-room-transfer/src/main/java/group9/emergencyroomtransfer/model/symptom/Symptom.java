package group9.emergencyroomtransfer.model.symptom;

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
@Table(name= "symptom")
public class Symptom  implements Serializable {

    @Id
    @Column(name ="symptom_id")
    private int symptomId;
    @Column(name = "symptom_name")
    private String symptomName;
    @Column(name = "system_id")
    private int systemId;


}
