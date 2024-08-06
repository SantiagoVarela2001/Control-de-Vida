import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './expenseController.css';

const ExpenseController = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({ date: '', amount: '', type: 'expense', description: '' });
  const [total, setTotal] = useState(0);



  const handleDateClick = (arg) => {
    setFormData({ ...formData, date: arg.dateStr });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title: `${formData.type === 'expense' ? '-' : '+'} ${formData.amount} ${formData.description}`,
      date: formData.date,
      color: formData.type === 'expense' ? 'red' : 'green',
    };
    setEvents([...events, newEvent]);

    const amount = parseFloat(formData.amount);
    setTotal(total + (formData.type === 'expense' ? -amount : amount));

    setFormData({ date: '', amount: '', type: 'expense', description: '' });
  };

  return (
    <div className="expense-controller">
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          locale={'es'}
        />
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Dia</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              readOnly
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Dinero</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="form-control"
            >
              <option value="expense">Salida</option>
              <option value="income">Entrada</option>
            </select>
          </div>
          <div className="form-group">
            <label>Descripcion</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </form>
        <div className="total-display">
          <h3>Total: ${total}</h3>
        </div>
      </div>
    </div>
  );
};

export default ExpenseController;
