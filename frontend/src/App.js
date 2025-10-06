import React, { useState } from 'react';
import './App.css';

function App() {
  // Données des horaires de prière
  const schedules = [
    { id: 1, prayer: 'Subah (Prière de l\'aube)', time: '05:30' },
    { id: 2, prayer: 'Tisbar (Prière du midi)', time: '14:00' },
    { id: 3, prayer: 'Takusan (Prière du soir)', time: '17:30' },
    { id: 4, prayer: 'Magal (Célébration principale)', time: '10:00' }
  ];

  // Points d'intérêt
  const pointsInteret = [
    { id: 1, name: 'Mosquée de Touba', type: 'Lieu de prière' },
    { id: 2, name: 'Mausolée de Cheikh Ahmadou Bamba', type: 'Site historique' },
    { id: 3, name: 'Marché de Touba', type: 'Commerce' },
    { id: 4, name: 'Point de restauration', type: 'Service' }
  ];

  // État pour le formulaire d'inscription
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: ''
  });

  // État pour stocker les pèlerins inscrits
  const [pilgrims, setPilgrims] = useState([]);

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.phone) {
      alert('Veuillez remplir au moins le nom et le téléphone');
      return;
    }

    // Ajouter le pèlerin à la liste
    const newPilgrim = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleDateString()
    };
    
    setPilgrims([...pilgrims, newPilgrim]);
    
    // Notification de succès
    alert(`Merci ${formData.name}! Votre inscription est confirmée.`);
    
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: ''
    });
  };

  // Gestion des changements dans les inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="App">
      {/* En-tête */}
      <header className="app-header">
        <h1>🕌 Magal de Touba 2024</h1>
        <p>Application de gestion pour la communauté Mouride</p>
      </header>

      {/* Section des horaires */}
      <section className="section">
        <h2>📅 Horaires des Prières et Événements</h2>
        <div className="schedules-grid">
          {schedules.map(item => (
            <div key={item.id} className="schedule-card">
              <div className="prayer-name">{item.prayer}</div>
              <div className="prayer-time">{item.time}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section des points d'intérêt */}
      <section className="section">
        <h2>📍 Points d'Intérêt</h2>
        <div className="points-grid">
          {pointsInteret.map(point => (
            <div key={point.id} className="point-card">
              <h3>{point.name}</h3>
              <p>{point.type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulaire d'inscription */}
      <section className="section">
        <h2>📝 Inscription Pèlerin</h2>
        <form onSubmit={handleSubmit} className="inscription-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nom complet *"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Téléphone *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              name="location"
              placeholder="Lieu de résidence"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          
          <button type="submit" className="submit-btn">
            S'inscrire au Magal
          </button>
        </form>
      </section>

      {/* Liste des pèlerins inscrits */}
      {pilgrims.length > 0 && (
        <section className="section">
          <h2>👥 Pèlerins Inscrits ({pilgrims.length})</h2>
          <div className="pilgrims-list">
            {pilgrims.map(pilgrim => (
              <div key={pilgrim.id} className="pilgrim-card">
                <strong>{pilgrim.name}</strong>
                <div>Tél: {pilgrim.phone}</div>
                {pilgrim.email && <div>Email: {pilgrim.email}</div>}
                <small>Inscrit le: {pilgrim.date}</small>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Pied de page */}
      <footer className="app-footer">
        <p>Application développée par Aminata Gueye pour la communauté Mouride - Magal de Touba 2024</p>
      </footer>
    </div>
  );
}

export default App;