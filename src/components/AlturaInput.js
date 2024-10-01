export default function AlturaInput(props) {
      return (
            <div className="d-flex justify-content-between p-1">
                  <label className="p-1">Digite sua altura</label>
                  <input
                        type="number"
                        placeholder="Ex: 1,86"
                        required
                        step="0.01"
                        value={props.altura}
                        onChange={(e) => {
                              props.setAltura(e.target.value);
                        }}
                  />
            </div>
      );
}
