

const db = firebaseAdmin.firestore();
const usersCollection = db.collection('users');

app.use(express.json());

// Ruta para actualizar el nombre y la contraseña de un usuario por su ID
app.patch('/users/:userId', async (req, res) => {
                  try {
                                    const userId = req.params.userId;
                                    const { name, password } = req.body;

                                    // Actualizar el nombre y la contraseña del usuario en la base de datos
                                    await usersCollection.doc(userId).update({
                                                      name,
                                                      password,
                                    });

                                    res.status(200).json({ message: 'Usuario actualizado exitosamente.' });
                  } catch (error) {
                                    console.error('Error al actualizar el usuario:', error);
                                    res.status(500).json({ error: 'Ocurrió un error al actualizar el usuario.' });
                  }
});

// Puerto en el que se ejecutará el servidor
const port = 3000;
app.listen(port, () => {
                  console.log(`Servidor corriendo en http://localhost:${port}`);
});