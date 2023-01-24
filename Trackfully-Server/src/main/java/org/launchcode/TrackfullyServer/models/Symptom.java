package org.launchcode.TrackfullyServer.models;

import com.sun.istack.NotNull;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.validation.Valid;

@Entity
public class Symptom extends AbstractEntity {

    @NotNull
    private String symptomName;

    @OneToOne
    @JoinColumn(name = "user_id")
    @NotNull
    @Valid
    private User user;

    //private int user_id;

    public Symptom(String symptomName){
        this.symptomName = symptomName;
        //this.user_id = user.getId();
    }

    public Symptom() {}

    public String getSymptomName() {
        return symptomName;
    }

    public void setSymptomName(String symptomName) {
        this.symptomName = symptomName;
    }

    @Override
    public String toString() {
        return symptomName;
    }

    public User getUser() {
        return user;
    }
//    public int getUserId() {
//        return userId;
//    }
}
