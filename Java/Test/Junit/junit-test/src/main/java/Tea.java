
public class Tea {
	
	private TeaType teaType;
	private int sugar;
	private boolean isMix;
	
	public Tea() {
	}
	
	public Tea(final TeaType teaType, int sugar) {
		if(teaType == null) {
			throw new NullPointerException("Argument teaType is null");
		}
		this.teaType = teaType;
		this.sugar = sugar;
	}
	
	public TeaType getTeaType() {
		return teaType;
	} public void setTeaType(TeaType teaType) {
		this.teaType = teaType;
	}
	
	public int getSugar() {
		return sugar;
	} public void setSugar(int sugar) {
		this.sugar = sugar;
	}
	
	public boolean mix() {
		if(this.sugar > 0) {
			this.isMix = true;
			return true;
		}
		return false;
	}

	public boolean addSugar() {
		this.setSugar(this.sugar+1);
		if(isMix) {
			this.mix();
		}
		return true;
	}

}
