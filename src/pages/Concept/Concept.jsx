import React, { useState, useEffect } from 'react';
import Header from '../../components/Header'
import WeddingDress from './ConceptLayout/WeddingDress'
import InteriorDecoration from './ConceptLayout/InteriorDecoration'
import Vendor from './ConceptLayout/Vendor'
import KonsepAcara from './ConceptLayout/KonsepAcara'
import DetailAcara from './ConceptLayout/DetailAcara'
import Footer from '../../components/Footer'
import { useNavigate, useParams } from 'react-router-dom';

function Concept() {
  const token = localStorage.getItem('token');
  const dataUser = JSON.parse(localStorage.getItem('users'));
  const navigate = useNavigate();

  useEffect(() => {

    if (!token) {
      navigate('/login');
      return;
    }

    if(!dataUser || dataUser.role !== 'user') {
      navigate('/');
      return;
    }
  }, [ navigate, token, dataUser]);

  return (
    <>
    <div className='position: relative'>
        <Header />
        <WeddingDress />
        <InteriorDecoration />
        <Vendor />
        <KonsepAcara />
        <DetailAcara />
        <Footer />
    </div>
    </>
  )
}

export default Concept
