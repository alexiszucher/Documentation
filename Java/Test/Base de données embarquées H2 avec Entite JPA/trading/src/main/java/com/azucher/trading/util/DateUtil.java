package com.azucher.trading.util;

import java.util.Calendar;
import java.util.Date;

public class DateUtil {

    public static Date getDateInPast(int daySubstract) {
        Calendar calendar = Calendar.getInstance();
        while (daySubstract >= 0) {
            calendar.add(Calendar.DAY_OF_MONTH, -1);
            daySubstract--;
        }
        return calendar.getTime();
    }

}
