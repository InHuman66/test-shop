import React, {useEffect} from 'react';
import './App.css';
import MainContainer from "./main/ui/components/main/mainContainer";
import ProductPresentationContainer from "./main/ui/components/product-presentation/productPresentationContainer";
import Header from "./main/ui/components/Header/header";
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getItemsTC } from './main/bll/reducers/app-reducer';

function App() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getItemsTC())
    },[])
  return (
    <div>
        <Header/>
        <Route exact  path={'/'} render={()=>
            <MainContainer/>
        }/>
        <Route exact path={'/item/:itemId?'} render={()=>
            <ProductPresentationContainer/>
        }/>
    </div>
  );
}

export default App;
