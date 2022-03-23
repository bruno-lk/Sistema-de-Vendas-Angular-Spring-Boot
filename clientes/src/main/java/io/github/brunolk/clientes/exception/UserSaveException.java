package io.github.brunolk.clientes.exception;

public class UserSaveException extends RuntimeException {

    public UserSaveException(String login){
        super("Login " + login + " ja cadastrado");
    }
}
