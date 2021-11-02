import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Scanner;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.test.util.ReflectionTestUtils;

@RunWith(MockitoJUnitRunner.class)
public class TeaTest {
	
	@Test(expected = NullPointerException.class)
	public void badTypeOfTeaPassInConstructor() {
		Tea tea = new Tea(null, 0);
	}
	
	@Test
	public void goodTypeOfTeaPassInConstructor() {
		Tea tea = new Tea(TeaType.ORANGE, 0);
		assertTrue(tea instanceof Tea);
	}
	
	@Test
	public void cantMixWithoutSugar() {
		Tea tea = new Tea(TeaType.ORANGE, 0);
		boolean mix = tea.mix();
		assertEquals(mix, false);
	}
	
	@Test
	public void canMixWithSugar() {
		Tea tea = new Tea(TeaType.ORANGE, 2);
		boolean mix = tea.mix();
		assertEquals(mix, true);
	}
	
	@Test
	public void shouldCallMixFunctionIfAddASugarInTeaAfterMix() {
		Tea teaMock = mock(Tea.class);
		ReflectionTestUtils.setField(teaMock, "sugar", 1);
		when(teaMock.mix()).thenCallRealMethod();
		when(teaMock.addSugar()).thenCallRealMethod();
		teaMock.mix();
		teaMock.addSugar();
		verify(teaMock, times(2)).mix();
	}

}
