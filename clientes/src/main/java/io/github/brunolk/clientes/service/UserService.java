package io.github.brunolk.clientes.service;

import io.github.brunolk.clientes.exception.UserSaveException;
import io.github.brunolk.clientes.model.entity.User;
import io.github.brunolk.clientes.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    public User save (User user){
        boolean exists = userRepository.existsByUsername(user.getUsername());

        if (exists) {
            throw new UserSaveException(user.getUsername());
        }

        return userRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository
                .findByUsername(username)
                .orElseThrow(()-> new UsernameNotFoundException("Login não encontrado"));



        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getUsername())
                .password(user.getPassword())
                .roles("USER")
                .build();
    }
}
