import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button, FlatList} from 'react-native';

export default function App() {
	const [newItem, setNewItem] = useState('');
	const [itemsList, setItemsList] = useState([]);

	const handleAdd = () => {
		if (!newItem) return;
		setItemsList([...itemsList, newItem.slice(0, 1).toUpperCase() + newItem.slice(1).toLowerCase()]);
		setNewItem('');
	};

	const handleClear = () => {
		setItemsList([]);
		setNewItem('');
	};

	//console.log(itemsList);

	return (
		<View style={styles.container}>
			<TextInput value={newItem} onChangeText={(e) => setNewItem(e)} style={styles.textInput} />
			<View style={styles.buttonsAreaView}>
				<View style={styles.buttonViewLeft}>
					<Button title='ADD' onPress={handleAdd} />
				</View>
				<View style={styles.buttonViewRight}>
					<Button title='CLEAR' onPress={handleClear} />
				</View>
			</View>
			<Text style={styles.shoppingList}>My shoppinglist</Text>
			<FlatList data={itemsList} renderItem={({index, item}) => <Text key={index}>{item}</Text>} />
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight ? StatusBar.currentHeight + 50 : 50,
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textInput: {
		width: 200,
		margin: 5,
		paddingLeft: 5,
		paddingRight: 5,
		borderWidth: 1,
		borderColor: '#000000',
	},
	buttonsAreaView: {
		margin: 5,
		flexDirection: 'row',
	},
	buttonViewLeft: {
		marginRight: 5,
	},
	buttonViewRight: {
		// nothing here yet
	},
	shoppingList: {
		margin: 5,
		fontSize: 20,
	},
});

