package com.geluzr.vehicleapi;
import static org.assertj.core.api.Assertions.assertThat;

import com.geluzr.vehicleapi.controller.VehicleController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class VehicleapiApplicationTests {

	@Autowired
	private VehicleController controller;

	@Test
	void contextLoads() {
		assertThat(controller).isNotNull();
	}




}
