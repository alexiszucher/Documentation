package com.azucher.trading;

import com.azucher.trading.entity.Trade;
import com.azucher.trading.repository.TradeRepository;
import com.azucher.trading.service.TradeService;
import com.azucher.trading.util.DateUtil;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;

import java.util.*;

import static org.springframework.test.context.jdbc.Sql.ExecutionPhase.AFTER_TEST_METHOD;

@DataJpaTest
@Sql(scripts = "/create-data.sql")
@Sql(scripts = "/cleanup-data.sql", executionPhase = AFTER_TEST_METHOD)
public class TradeRepositoryTest {

    @Autowired
    private TradeRepository tradeRepository;

    private List<Trade> everyTrade;

    @BeforeEach
    void setUp() {
        everyTrade = new ArrayList<Trade>() {{
            add(new Trade(1, 10, new GregorianCalendar(2022, Calendar.JANUARY, 01).getTime()));
            add(new Trade(2, 10, new GregorianCalendar(2022, Calendar.JANUARY, 02).getTime()));
            add(new Trade(3, 10, new GregorianCalendar(2022, Calendar.JANUARY, 03).getTime()));
            add(new Trade(4, 10, new GregorianCalendar(2022, Calendar.JANUARY, 04).getTime()));
            add(new Trade(5, 20, new GregorianCalendar(2022, Calendar.JANUARY, 05).getTime()));
            add(new Trade(6, 20, new GregorianCalendar(2022, Calendar.JANUARY, 06).getTime()));
            add(new Trade(7, 20, new GregorianCalendar(2022, Calendar.JANUARY, 07).getTime()));
            add(new Trade(8, 20, new GregorianCalendar(2022, Calendar.MARCH, 03).getTime()));
            add(new Trade(9, 20, new GregorianCalendar(2022, Calendar.MARCH, 04).getTime()));
        }};
    }

    @Test
    void should_return_trade_list_of_last_30_days() {
        List<Trade> actual = tradeRepository.getTradeSinceDate(DateUtil.getDateInPast(30));
        List<Trade> expected = new ArrayList<Trade>() {{
           add(everyTrade.get(7));
           add(everyTrade.get(8));
        }};
        Assertions.assertTrue(testTradeList(expected, actual));
    }

    @Test
    void should_return_every_trade() {
        List<Trade> actual = tradeRepository.findAll();
        Assertions.assertTrue(testTradeList(everyTrade, actual));
    }

    public boolean testTradeList(List<Trade> listTrade, List<Trade> listTrade2) {
        if(listTrade.size() == listTrade2.size()) {
            for(int i = 0; i < listTrade.size(); i++) {
                if(!listTrade.get(i).equals(listTrade2.get(i))) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

}
