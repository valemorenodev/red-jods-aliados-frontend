<Modal.Body>
    <form>
        <Form.Group className="mb-3">
            <label htmlFor="name" className="form-label">
                Nombre
            </label>
            <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <label htmlFor="email" className="form-label">
                Correo electrónico
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <label htmlFor="password" className="form-label">
                Contraseña
            </label>
            <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <label htmlFor="role" className="form-label">
                Rol
            </label>
            <select
                className="form-control"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
            >
                <option value="">Seleccione un rol</option>
                <option value="Super Administrador">Super Administrador</option>
                <option value="Usuario">Usuario</option>
            </select>
        </Form.Group>
    </form>
</Modal.Body>