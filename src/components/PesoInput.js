export default function PesoInput({ peso, setPeso }) {
      return (
            <div class="d-flex justify-content-between p-1">
                  <label class="p-1">Digite seu peso</label>
                  <input
                        type="number"
                        placeholder="Ex: 76"
                        required
                        step="0.1"
                        value={peso}
                        onChange={(e) => {
                              setPeso(e.target.value);
                        }}
                  />
            </div>
      );
}
