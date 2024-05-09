'use client';
import React, { useState, useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { EventClickArg as CoreEventClickArg } from '@fullcalendar/core';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { Card, CardBody } from '@nextui-org/react';

interface MyEvent {
  id: string;
  title: string;
  start: Date | string | any;
  end: Date | string | any;
  allDay?: boolean;
  // isDragged?: boolean; // New property to indicate if event was dragged and dropped
}

const MyCalendar: React.FC = () => {
  const [events, setEvents] = useState<MyEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<MyEvent | null>(null);
  const [open, setOpen] = useState(false);

  const sidebarEventsRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<FullCalendar>(null);

  useEffect(() => {
    const storedEvents = localStorage.getItem('calendarEvents');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    if (sidebarEventsRef.current && calendarRef.current) {
      new Draggable(sidebarEventsRef.current, {
        itemSelector: 'li',
        eventData: function (eventEl) {
          return {
            title: eventEl.innerText,
          };
        },
      });
    }
  }, []);

  const handleDateSelect = (selectInfo: { startStr: any; endStr: any }) => {
    const title = prompt('Please enter event title:');
    if (title) {
      const newEvent: MyEvent = {
        id: new Date().getTime().toString(),
        title: title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: true,
      };
      setEvents([...events, newEvent]);
    }
  };

  const handleEventClick = (clickInfo: CoreEventClickArg) => {
    const event = clickInfo.event;
    const start =
      event.start instanceof Date
        ? event.start.toISOString()
        : String(event.start);
    const end =
      event.end instanceof Date ? event.end.toISOString() : String(event.end);

    setSelectedEvent({
      id: event.id,
      title: event.title,
      start: start,
      end: end,
      allDay: event.allDay,
    });
    setOpen(true);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      setEvents(events.filter((event) => event.id !== selectedEvent.id));
      setSelectedEvent(null);
      setOpen(false);
    }
  };

  const handleEventDrop = (dropInfo: any) => {
    const draggedEvent: MyEvent = {
      id: new Date().getTime().toString(),
      title: dropInfo.draggedEl.innerText,
      start: dropInfo.dateStr,
      end: dropInfo.dateStr,
      allDay: true,
      // isDragged: true, // Set the isDragged property for dragged events
    };
    setEvents((prevEvents) => [...prevEvents, draggedEvent]);
  };

  return (
    <div className="flex">
      <div
        className="w-1/4 p-4 bg-slate-100 rounded-2xl"
        ref={sidebarEventsRef}
      >
        <h2 className="text-lg font-bold mb-4">Events</h2>
        <ul>
          <li
            title="Drag & Drop on Calender"
            className="border-medium bg-white rounded-xl text-center cursor-pointer hover:bg-blue-500"
          >
            Meeting
          </li>
          <li
            title="Drag & Drop on Calender"
            className="border-medium bg-white rounded-xl text-center cursor-pointer hover:bg-blue-500"
          >
            Lunch
          </li>
          <li
            title="Drag & Drop on Calender"
            className="border-medium bg-white rounded-xl text-center cursor-pointer hover:bg-blue-500"
          >
            Conference
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-4">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={'dayGridMonth'}
          headerToolbar={{
            start: 'today prev,next',
            center: 'title',
            end: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          height={'90vh'}
          editable={true}
          selectable={true}
          // selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          select={handleDateSelect}
          events={events}
          eventClick={handleEventClick}
          eventDrop={handleEventDrop} // Handle dropped events
          droppable={true}
        />
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedEvent?.title}</DialogTitle>
        <DialogContent>
          <p>Start: {selectedEvent?.start}</p>
          <p>End: {selectedEvent?.end}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteEvent} color="error">
            Delete
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyCalendar;
