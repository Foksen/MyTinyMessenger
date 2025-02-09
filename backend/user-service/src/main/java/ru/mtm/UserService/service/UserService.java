package ru.mtm.UserService.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.mtm.UserService.exception.UserNotFoundException;
import ru.mtm.UserService.model.User;
import ru.mtm.UserService.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User getUserById(Integer id) {
        return User.builder().id(1).email("someemail@gmail.com").password("123").build();
//        return userRepository.findById(id).orElseThrow(
//                () -> new UserNotFoundException("User with id = " + id + " not found")
//        );
    }

    public Iterable<User> getUsers() {
        return List.of(User.builder().id(1).email("someemail@gmail.com").password("123").build());
//        return userRepository.findAll();
    }
}
