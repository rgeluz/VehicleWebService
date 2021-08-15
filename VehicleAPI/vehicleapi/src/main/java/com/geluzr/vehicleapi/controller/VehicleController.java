package com.geluzr.vehicleapi.controller;

import com.geluzr.vehicleapi.model.Vehicle;
import com.geluzr.vehicleapi.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {
    @Autowired
    private VehicleRepository vehicleRepository;

    @GetMapping //GET vehicles
    public List<Vehicle> findAllVehicles() {
        return vehicleRepository.findAll();
    }

    @GetMapping("/{id}")    //GET vehicles/{id}
    public ResponseEntity<Vehicle> findVehicleById(@PathVariable(value="id") int id) {
        Optional<Vehicle> vehicle = vehicleRepository.findById(id);

        if(vehicle.isPresent()) {
            return ResponseEntity.ok().body(vehicle.get());     //return 200 OK
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping //POST vehicles
    public Vehicle saveVehicle(@Validated @RequestBody Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    @PutMapping("/{id}") //PUT vehicles
    public Vehicle updateVehicle(@RequestBody Vehicle newVehicle, @PathVariable(value="id") int id) {
        return vehicleRepository.findById(id)
                .map(vehicle -> {
                    vehicle.setYear(newVehicle.getYear());
                    vehicle.setMake(newVehicle.getMake());
                    vehicle.setModel(newVehicle.getModel());
                    return vehicleRepository.save(vehicle);
                })
                .orElseGet(() -> {
                   newVehicle.setId(id);
                   return vehicleRepository.save(newVehicle);
                });
    }

    @DeleteMapping("/{id}") //DELETE vehicles/{id}
    public void deleteVehicle(@PathVariable(value="id") int id) {
        vehicleRepository.deleteById(id);
    }

}
