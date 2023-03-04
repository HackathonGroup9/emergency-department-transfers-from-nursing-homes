package group9.emergencyroomtransfer.service;

import group9.emergencyroomtransfer.model.notification.Notification;
import group9.emergencyroomtransfer.model.notification.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SelectNotificationService {
    private NotificationRepository notificationRepository;

    @Autowired
    public SelectNotificationService(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    public Optional<Notification> getByNotificationId(int notificationId) {
        return notificationRepository.findFirstByNotificationId(notificationId);
    }
}
