package org.launchcode.TrackfullyServer.controllers;

import org.launchcode.TrackfullyServer.data.UserRepository;
import org.launchcode.TrackfullyServer.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();


    @GetMapping("")
    public Iterable<User> getUser(){

      //  uncomment this section for the first bootrun for hardcoded data to be added in MySQL, re-comment for any additional bootruns- otherwise will get error since you are adding the exact same data twice
//            userRepository.save(new User("Emma", "emma@gmail.com", "emma123"));
//            userRepository.save(new User("Emily", "emily@gmail.com", "emily123"));

        return userRepository.findAll();
    }

    @PostMapping("")
    void addUser(@RequestBody User user) {
        User newUser = new User(user.getName(), user.getEmail(), user.getPwHash());
        userRepository.save(newUser);
    }

    @PostMapping("authenticate")
    public HashMap<String, String> authenticate (@RequestBody User user) {

        Optional<User> userData = userRepository.findByEmail(user.getEmail());

        HashMap<String, String> map = new HashMap<>();

        if (userData.isPresent()) {
            User userInfo = userData.get();
            if (encoder.matches(user.getPwHash(), userInfo.getPwHash())) {
                map.put("status","success");
            } else {
                map.put("status","failure");
            }
        } else {
            map.put("status","failure");
        }
        return map;
    }
}
