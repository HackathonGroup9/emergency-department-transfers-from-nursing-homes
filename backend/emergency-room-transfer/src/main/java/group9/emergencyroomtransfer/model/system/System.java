package group9.emergencyroomtransfer.model.system;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "biosystem")
public class System {

    @Id
    @Column(name = "system_id")
    private int systemId;
    @Column(name = "system_name")
    private String systemName;

}
