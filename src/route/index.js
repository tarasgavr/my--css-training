// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ================================================================
// router.get Створює нам один ентпоїнт
//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})
// ================================================================
router.get('/css-train-background', function (req, res) {
  // res.render генерує нам HTML сторінку
  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('css-train-background', {
    title: 'css-train-background',
    layout: 'css',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================
router.get('/css-train-grid', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('css-train-grid', {
    title: 'css-train-grid',
    layout: 'css',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================
router.get('/css-train-flex', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('css-train-flex', {
    title: 'css-train-flex',
    layout: 'css',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router