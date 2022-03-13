package com.azucher.trading;

import com.azucher.trading.entity.Trade;
import com.azucher.trading.service.TradeService;
import com.azucher.trading.util.DateUtil;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Spy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@SpringBootTest
class TradeServiceTest {

	@Autowired
	TradeService tradeService;

	@Spy
	TradeService tradeServiceMock;

	List<Trade> tradeList = new ArrayList<Trade>(){{
		add(new Trade(1, 10, DateUtil.getDateInPast(4)));
		add(new Trade(2, 10, DateUtil.getDateInPast(3)));
		add(new Trade(3, 10, DateUtil.getDateInPast(2)));
		add(new Trade(4, 20, DateUtil.getDateInPast(1)));
		add(new Trade(5, 20, DateUtil.getDateInPast(0)));
	}};

	List<Trade> everyTrade = new ArrayList<Trade>(){{
		add(new Trade(1, 20, DateUtil.getDateInPast(44)));
		add(new Trade(1, 20, DateUtil.getDateInPast(43)));
		add(new Trade(2, 10, DateUtil.getDateInPast(9)));
		add(new Trade(1, 10, DateUtil.getDateInPast(10)));
		add(new Trade(2, 10, DateUtil.getDateInPast(9)));
		add(new Trade(3, 10, DateUtil.getDateInPast(8)));
		add(new Trade(4, 20, DateUtil.getDateInPast(7)));
		add(new Trade(5, 20, DateUtil.getDateInPast(6)));
		add(new Trade(6, 20, DateUtil.getDateInPast(5)));
		add(new Trade(7, 30, DateUtil.getDateInPast(4)));
		add(new Trade(8, 30, DateUtil.getDateInPast(3)));
		add(new Trade(9, 30, DateUtil.getDateInPast(2)));
		add(new Trade(12, 30, DateUtil.getDateInPast(1)));
		add(new Trade(13, 30, DateUtil.getDateInPast(0)));
	}};

	List<Trade> tradeListLastMonth = new ArrayList<Trade>(){{
		add(new Trade(1, 10, DateUtil.getDateInPast(4)));
		add(new Trade(2, 10, DateUtil.getDateInPast(3)));
		add(new Trade(3, 10, DateUtil.getDateInPast(2)));
		add(new Trade(4, 20, DateUtil.getDateInPast(1)));
		add(new Trade(5, 20, DateUtil.getDateInPast(0)));
	}};

	List<Trade> tradeListThisMonth = new ArrayList<Trade>(){{
		add(new Trade(1, 10, DateUtil.getDateInPast(35)));
		add(new Trade(2, 10, DateUtil.getDateInPast(36)));
		add(new Trade(3, 20, DateUtil.getDateInPast(37)));
		add(new Trade(4, 20, DateUtil.getDateInPast(38)));
		add(new Trade(5, 20, DateUtil.getDateInPast(39)));
	}};

	@Test
	void should_return_right_evolution_of_percentage_performance_between_every_trade_and_this_month() {
		double actual = tradeService.getEvolutionPercentage(tradeService.sum(everyTrade) - tradeService.sum(tradeListThisMonth), tradeService.sum(everyTrade));
		double expected = 38.09;
		Assertions.assertEquals(expected, actual);
	}

	@Test
	void should_return_right_evolution_of_percentage_average_performance_per_day_between_this_month_and_last_month() {
		double actual = tradeService.getEvolutionPercentage(tradeService.avg(tradeListLastMonth), tradeService.avg(tradeListThisMonth));
		double expected = 14.28;
		Assertions.assertEquals(expected, actual);
	}

	@Test
	void should_return_right_sum_of_trade_list() {
		double expected = 70;
		double actual = tradeService.sum(tradeList);
		Assertions.assertEquals(expected, actual);
	}

    @Test
    void should_return_sum_0_With_empty_trade_list() {
        double expected = 0;
        double actual = tradeService.sum(new ArrayList<Trade>());
        Assertions.assertEquals(expected, actual);
    }

    @Test
    void should_return_average_0_With_empty_trade_list() {
        double expected = 0;
        double actual = tradeService.avg(new ArrayList<Trade>());
        Assertions.assertEquals(expected, actual);
    }

	@Test
	void should_return_right_average_of_trade_list() {
		double expected = 14;
		double actual = tradeService.avg(tradeList);
		Assertions.assertEquals(expected, actual);
	}

	// Brouillon
	public void initializeData() {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.MONTH, -4);
		while(!dateFormat.format(calendar.getTime()).equals(dateFormat.format(Calendar.getInstance().getTime()))) {
			//calendar.add(Calendar.MONTH, -1);
			//Date dateOneMonthLater = calendar.getTime();
			calendar.add(Calendar.MONTH, 1);
			System.out.println("test "+dateFormat.format(calendar.getTime())+" != "+dateFormat.format(Calendar.getInstance().getTime()));
		}
	}

}
