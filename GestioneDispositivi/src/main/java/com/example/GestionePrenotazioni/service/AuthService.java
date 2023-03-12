package com.example.GestionePrenotazioni.service;

import com.example.GestioneDispositivi.payload.LoginDto;
import com.example.GestioneDispositivi.payload.RegisterDto;

public interface AuthService {
    
	String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    
}
