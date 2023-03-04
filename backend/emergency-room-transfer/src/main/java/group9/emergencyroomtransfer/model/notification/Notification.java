package group9.emergencyroomtransfer.model.notification;

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
@Table(name = "notification")
public class Notification implements Serializable {
    @Id
    @Column(name = "notification_id")
    private Integer notificationId;
    @Column(name = "immediate")
    private Integer immediate;
    @Column(name = "message")
    private String message;
}
