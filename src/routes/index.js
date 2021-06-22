import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ListDragons, Login, CreateDragon } from '../screens';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsLogged } from '../store/ducks/login';
import { BackButton, Loading } from '../components';

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
              headerRight: () => <BackButton />,
            }}
          />
          <Stack.Screen
            name="createDragon"
            component={CreateDragon}
            options={navigation => {
              return {
                title: navigation.route.params
                  ? 'Editar Dragão'
                  : 'Criar Dragão',
                headerBackTitle: 'Voltar',
                headerStyle: {
                  shadowColor: 'transparent',
                  backgroundColor: '#FFFFFF',
                },
              };
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
