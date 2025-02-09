package ru.mtm.UserService.repository;

import org.springframework.data.repository.CrudRepository;
import ru.mtm.UserService.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {
}
