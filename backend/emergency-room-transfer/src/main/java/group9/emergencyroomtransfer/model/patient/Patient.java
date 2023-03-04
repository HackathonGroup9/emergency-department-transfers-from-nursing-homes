package group9.emergencyroomtransfer.model.patient;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Getter
@Setter
@Table(name="patient")
public class Patient implements Serializable {

    @Id
    @Column(name = "phn")
    private long phn;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "birth_date")
    private String birthDate;

}
