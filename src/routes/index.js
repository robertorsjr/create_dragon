import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ListDragons, Login, CreateDragon } from '../screens';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsLogged } from '../store/ducks/login';
import { Loading } from '../components';

const Stack = createStackNavigator();

export default function Routes() {
  const isLoggedIn = useSelector(({ loginState }) => loginState.data);
  const loading = useSelector(({ loginState }) => loginState.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkIsLogged());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="listDragons"
            component={ListDragons}
            options={{
              title: 'Lista de Dragões',
              headerStyle: {
                shadowColor: 'transparent',
              },
            }}
          />
          <Stack.Screen
            name="createDragon"
            component={CreateDragon}
            options={{
              title: 'Criar Dragão',
              headerStyle: {
                shadowColor: 'transparent',
                backgroundColor: '#FFFFFF',
              },
            }}
          />
          <Stack.Screen
            name="editDragon"
            component={CreateDragon}
            options={{
              title: 'Editar Dragão',
              headerStyle: {
                shadowColor: 'transparent',
                backgroundColor: '#FFFFFF',
              },
            }}
          />
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: '',
            headerStyle: {
              shadowColor: 'transparent',
              backgroundColor: '#FFFFFF',
            },
          }}
        />
      )}
    </Stack.Navigator>
  );
}
