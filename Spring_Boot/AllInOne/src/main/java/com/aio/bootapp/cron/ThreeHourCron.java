package com.aio.bootapp.cron;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;


@EnableScheduling
@Configuration
public class ThreeHourCron {

	@Scheduled(fixedRate = 9000000)//2.5 hr
	public void threeHourlyCron() {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
		Date now = new Date();
		String strDate = sdf.format(now);
		System.out.println("Fixed Rate scheduler:: " + strDate);
	}
}
