import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './src/Pages/Categories/Categories';
import Detail from './src/Pages/Detail/Detail';
import Meal from './src/Pages/Meals/Meals';

const Stack = createNativeStackNavigator();


const Router = () => {
  return (
    <NavigationContainer >
    <Stack.Navigator>
      <Stack.Screen name="CategoriesPage" component={Categories}/>
      <Stack.Screen name="DetailPage" component={Detail}/>
      <Stack.Screen name="MealPage" component={Meal}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
export default Router;

