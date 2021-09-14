package client;

import java.util.ArrayList;

// https://refactoring.guru/design-patterns/factory-method

public class FeatureFactory {
private ArrayList<Feature> features;
public FeatureFactory() {
	this.features = new ArrayList<Feature>();
}
public void add(Feature feature) {
	features.add(feature);
}
public void remove(Feature feature) {
	features.remove(feature);
}
public void init() {
	for(Feature feature : features){
		feature.init(); 	
	}
}
public void run(ConnectionStatus connectionStatus) {
	for(Feature feature : features) {
		feature.run(connectionStatus);
	}
	
}
}
