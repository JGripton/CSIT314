package com.csit314.roadSideAssistance.Technician;


/*
* Most comments to be removed once User class exists
* Other comments require other classes such as Job and BankAccount
* */

import com.csit314.roadSideAssistance.BankAccount.BankAccount;
import com.csit314.roadSideAssistance.Customer.CustomException;
import com.csit314.roadSideAssistance.User.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

/**
 * Technician model
 *
 * @author      Jack_Is_2048
 * @version     0.1
 * @since       0.1
 */
@Getter
@Setter
@Entity
@Table(name = "Technician")
public class Technician extends User {
    private boolean availableStatus,
                    lightVehicleQualification,
                    heavyVehicleQualification;

    private double avgRating;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "BankAccount_id")
    private BankAccount bankAccount;

//    private List<Job> jobsAssigned;

    public Technician() {
        super();
    }

    public Technician(String firstName, String lastName, String email, LocalDate dob, String phoneNumber, String password) throws TechnicianException {
        super(firstName, lastName, email, dob, phoneNumber, password);

        if(!validateUser()) {
            throw new TechnicianException("Technician fails to meet consistency constraints");
        }
    }

    public Technician(String firstName, String lastName, String email, LocalDate dob, String phoneNumber) {
        super(firstName, lastName, email, dob, phoneNumber);
    }

/*    public Technician(String UUID, String email, String mobileNumber,
                      String passwordHash, String firstName, String lastName,
                      String dateOfBirth, String address, String suburb,
                      String postcode, String state) {
//        super(UUID, email, mobileNumber,
//              passwordHash, firstName, lastName,
//              dateOfBirth, address, suburb,
//              postcode, state);
    }*/

    public void addToAvgRating(double rating) {
        avgRating += rating;
        setAvgRating(avgRating/2);
    }

    @Override
    public String toString() {
        return "Technician{" +
                "availableStatus=" + availableStatus +
                ", lightVehicleQualification=" + lightVehicleQualification +
                ", heavyVehicleQualification=" + heavyVehicleQualification +
                ", avgRating=" + avgRating +
                ", bankAccount=" + bankAccount +
                "} " + super.toString();
    }
}
