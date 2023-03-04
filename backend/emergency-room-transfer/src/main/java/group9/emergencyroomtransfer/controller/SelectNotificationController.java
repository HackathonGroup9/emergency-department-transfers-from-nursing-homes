package group9.emergencyroomtransfer.controller;

import group9.emergencyroomtransfer.model.notification.Notification;
import group9.emergencyroomtransfer.service.SelectNotificationService;
import group9.emergencyroomtransfer.service.SelectSeverityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/severities")
public class SelectNotificationController {
    private SelectNotificationService selectNotificationService;
    private SelectSeverityService selectSeverityService;
    @Autowired
    public SelectNotificationController(SelectSeverityService selectSeverityService, SelectNotificationService selectNotificationService) {
        this.selectSeverityService = selectSeverityService;
        this.selectNotificationService = selectNotificationService;
    }

    @GetMapping(path = "/{severityId}/notification")
    public Optional<Notification> getNotificationBySeverityId (@PathVariable int severityId) {
        int notificationId = selectSeverityService.getBySeverityId(severityId).getNotificationId();
        return selectNotificationService.getByNotificationId(notificationId);
    }
}
