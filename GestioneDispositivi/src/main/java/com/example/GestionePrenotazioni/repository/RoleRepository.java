package com.example.GestionePrenotazioni.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.GestioneDispositivi.entity.ERole;
import com.example.GestioneDispositivi.entity.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
	Optional<Role> findByRoleName(ERole roleName);

}
