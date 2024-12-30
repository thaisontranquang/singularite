import React, { useState, useEffect } from 'react'
import styles from './FAQList.module.css'

const FAQList = () => {
  const [faqs, setFaqs] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedSubjects, setSelectedSubjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/faqData.json')
      .then(response => response.json())
      .then(data => {
        setFaqs(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Erreur de récupération des données de la FAQ :', error)
        setError(error)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>FAQ en cours de chargement...</p>
  if (error) return <p>Erreur de récupération des données de la FAQ : {error.message}</p>

  const handleCategoryClick = category => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  const handleSubjectClick = subject => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter(sub => sub !== subject))
    } else {
      setSelectedSubjects([...selectedSubjects, subject])
    }
  }

  const filteredFAQs = faqs.filter(faq => {
    const hasSelectedCategories = selectedCategories.length === 0 || selectedCategories.some(category => faq.categories.includes(category))
    const hasSelectedSubjects = selectedSubjects.length === 0 || selectedSubjects.some(subject => faq.subjects.includes(subject))
    return hasSelectedCategories && hasSelectedSubjects
  })

  const renderAnswer = answer => {
    return <div dangerouslySetInnerHTML={{ __html: answer }} />
  }

  return (
    <div>
      <div className={styles.filters}>
        <div className="faq-filters">
          <h4>Categories</h4>
          {['Création du personnage', 'Fonctionnement du forum', "L'Arceau et la vie en société", 'Lignées', 'Univers'].map(category => (
            <button key={category} onClick={() => handleCategoryClick(category)} className={selectedCategories.includes(category) ? styles.active : ''}>
              {category}
            </button>
          ))}
        </div>
        <div className="faq-filters">
          <h4>Sujets</h4>
          {[
            'Civils',
            'Compte',
            'Culture',  
            'Éclats',
            'Économie',
            'Éducation',
            'Équilibres',
            'Divers',
            "Forces de l'ordre",
            'Générateur de fiche',
            'Langage',
            "Mer d'Albâtre",
            'Parangons',
            'Politique',
            'PNJs',
            'Rédemptions',
            "Souterrains de l'Arceau",
            'Technologie',
            'Volontés'
          ].map(subject => (
            <button key={subject} onClick={() => handleSubjectClick(subject)} className={selectedSubjects.includes(subject) ? styles.active : ''}>
              {subject}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.faqList}>
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h3>{faq.question}</h3>
              <div>{renderAnswer(faq.answer)}</div>
            </div>
          ))
        ) : (
          <p>Aucune question trouvée ! Si vous en avez une, transmettez-là nous..</p>
        )}
      </div>
    </div>
  )
}

export default FAQList
