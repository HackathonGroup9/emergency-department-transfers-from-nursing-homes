package group9.emergencyroomtransfer.model.physician;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "physician")
public class Physician {

    @Id
    @Column(name = "physician_id")
    private int id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "primary_number")
    private String primaryNumber;
    @Column(name = "secondary_number")
    private String secondaryNumber;

}
