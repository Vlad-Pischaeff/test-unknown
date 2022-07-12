import React, { useState, useRef, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { useUser } from "./FormLayout";
import API from '../api';

export const FormImageUpload = ({ image }) => {
    const { user, setUser } = useUser();
    const [ crop, setCrop ] = useState({ unit: '%', x: 25, y: 25, width: 50, height: 50 });
    const imgRef = useRef(null);
    const previewCanvasRef = useRef(null);
    const hiddenCanvasRef = useRef(null);
    
    useEffect(() => {
        if (image) {
            const img = imgRef.current;
            const canvas = previewCanvasRef.current;
            const hcanvas = hiddenCanvasRef.current;

            const dpr = window.devicePixelRatio || 1;
    
            const scaleX = img.naturalWidth / img.width;
            const scaleY = img.naturalHeight / img.height;
            const ctx = canvas.getContext('2d');
            const hctx = hcanvas.getContext('2d');
    
            canvas.width = crop.width * dpr;
            canvas.height = crop.height * dpr;

            if ((crop.width > 0) && (crop.height > 0)) {
                ctx.drawImage(
                    img,
                    crop.x * scaleX,
                    crop.y * scaleY,
                    crop.width * scaleY,
                    crop.height * scaleY,
                    0,
                    0,
                    crop.width * dpr,
                    crop.height * dpr
                );
                hctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, 64, 64);
                const base64Image = hcanvas.toDataURL('image/jpeg');
                let obj = { ...user, "photo" : base64Image};
                setUser(obj);
            }
        }
    }, [crop, image]);

    return (
        <div className="upl_box" >
            <ReactCrop  crop={crop} aspect={1}
                        onChange={crop => setCrop(crop)} >
                <img src={image} ref={imgRef} style={{ "maxWidth": "10rem", "maxHeight": "10rem" }}/>
            </ReactCrop >
            <div>
                <canvas ref={previewCanvasRef} className="upl_canvas" />
                <canvas ref={hiddenCanvasRef} className="none" width='64' height='64' />
            </div>
        </div>
    );
}